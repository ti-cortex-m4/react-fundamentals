import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import AddAuthor from "./components/AddAuthor/AddAuthor";
import Authors from "./components/Authors/Authors";
import { getCourseDuration } from '../../helpers/time';
import { fetchData } from '../../common/utils/fetchData';
import { useValidation } from "./useValidation";
import {
  APP_REQUEST_PATHS,
  APP_URL_PATHS,
  HTTP_METHODS,
} from '../../common/constants';
import styles from './styles.module.css';

export const CourseForm = () => {
  const formInitialState = {
    title: '',
    description: '',
    duration: '',
    authors: [],
  };

  const [formData, setFormData] = useState(formInitialState);
  const [validationData, validateForm] = useValidation();
  const [duration, setDuration] = useState('');
  const [isAuthorAdded, setIsAuthorAdded] = useState(false);
  const [authors, setAuthors] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const getAllAuthors = async () => {
      const { successful, result, error } = await fetchData({
        url: APP_REQUEST_PATHS.authorsAll,
      });

      if (!error && successful) {
        setAuthors(result);
        setIsAuthorAdded(false);
      }
    };

    getAllAuthors();
  }, [isAuthorAdded]);

  const onFormChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
//     validateForm(event.target);
  };

  const onDurationChange = event => {
    let value = event.target.value;

    if (value.startsWith('0')) {
      value = value.slice(1);
    } else if (value.startsWith('-')) {
      value = 0;
    }

    setDuration(value);
//     handleDurationAdding(Number(value));
    let duration = Number(value);
     setFormData({...formData, duration});
//         validateForm({ name: 'duration', value: duration });
  };

  const formattedDuration = getCourseDuration(Number(duration));

  const onAddAuthorButtonClick = authorId => {
    const authorToBeAdded = authors.find(({ id }) => id === authorId);
    const filteredAuthors = authors.filter(({ id }) => id !== authorId);
    setFormData({...formData, authors: [...formData.authors, authorToBeAdded]});
    setAuthors(filteredAuthors);
    //validateForm({ name: 'authors', value: true });
  };

  const onDeleteAuthorButtonClick = authorId => {
    const authorToBeAdded = formData.authors.find(({ id }) => id === authorId);
    const filteredAuthors = formData.authors.filter(({ id }) => id !== authorId);
    //validateForm({ name: 'authors', value: formData.authors.length > 1 });
    setAuthors([...authors, authorToBeAdded]);
    setFormData({...formData, authors: filteredAuthors});
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const authors = formData.authors.map(({ id }) => id);

    const fetchConfig = {
      url: APP_REQUEST_PATHS.courseAdd,
      method: 'POST',
      body: { ...formData, authors },
    };
    const { successful, error } = await fetchData(fetchConfig);

    if ( !error && successful ) {
      navigate(APP_URL_PATHS.courses);
    }
  };
	
	return (
		<form onSubmit={handleFormSubmit}>
			<div>
              <Input
                labelText='Title'
                placeholderText='Enter title'
                type='text'
                name='title'
                value={formData.title}
                isValid={validationData.title}
                onChange={onFormChange}
              />
			<label>
				Description
              <textarea
                placeholder="Enter description"
                name='description'
                value={formData.description}
                onChange={onFormChange}
              />
			</label>

            <div>
                  <Input
                    labelText='Duration'
                    placeholder='Enter duration (in minutes)...'
                    type='number'
                    name='duration'
                    value={duration}
                    isValid={validationData.duration}
                    onChange={onDurationChange}
                  />
                <p className={styles.durationText}>
                Duration: <span className={styles.durationTime}>{formattedDuration}</span> hours
                </p>
            </div>

              <Button
                type='submit'
                buttonText='Create course'
                isValid={validationData.submitButton}
                disabled={!validationData.submitButton}
              />
			</div>

			<div className={styles.infoWrapper}>
				<div>
                    <AddAuthor
                      setIsAuthorAdded={setIsAuthorAdded}
                    />
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>
                    <Authors
                      authors={authors}
                      buttonText='Add author'
                      onButtonClick={onAddAuthorButtonClick}
                    />

					<strong>Course authors</strong>
                    <Authors
                      authors={formData.authors}
                      buttonText='Delete author'
                      onButtonClick={onDeleteAuthorButtonClick}
                    />
				</div>
			</div>
		</form>
	);
};
