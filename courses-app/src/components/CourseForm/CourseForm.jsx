import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { fetchData } from '../../common/utils/fetchData';
import {
  APP_REQUEST_PATHS,
  APP_URL_PATHS,
  HTTP_METHODS,
} from '../../common/constants';
import styles from './styles.module.css';

export const CourseForm = () => {

  const navigate = useNavigate();

  const formInitialState = {
    title: '',
    description: '',
    duration: '',
    authors: [],
  };
  const [formData, setFormData] = useState(formInitialState);

  const handleFormChange = event => {
    const { name, value } = event.target;
    setFormData({...formData, [name]: value });
//     validateForm(event.target);
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const authors = formData.authors.map(({ id }) => id);

    const fetchConfig = {
      url: APP_REQUEST_PATHS.courseAdd,
      method: HTTP_METHODS.post,
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
                name='title'
                value={formData.title}
                //                   isValid={validationData.title}
                onChange={handleFormChange}
//                 type='email'
              />

              <Button
//                 size='large'
                type='submit'
                buttonText='Create course'
//                 isValid={validationData.submitButton}
//                 disabled={!validationData.submitButton}
              />
			</div>

			<label>
				Description
              <textarea
                placeholder="Enter description"
                name='description'
                value={formData.description}
                onChange={handleFormChange}
              />
			</label>

			<div className={styles.infoWrapper}>
				<div>
					<div className={styles.newAuthorContainer}>
						// reuse Input component for new author field

						// reuse Button component for 'Create new author' button
					</div>

					// reuse Input component for duration field

					<p>Duration: </p>
				</div>

				<div className={styles.authorsContainer}>
					<strong>Authors</strong>

					// use 'map' to display all available autors. Reuse 'AuthorItem' component for each author

					<strong>Course authors</strong>

					// use 'map' to display course's autors. Reuse 'AuthorItem' component for each author

					<p className={styles.notification}>List is empty</p> // display this paragraph if there are no authors in the course
				</div>
			</div>
		</form>
	);
};
