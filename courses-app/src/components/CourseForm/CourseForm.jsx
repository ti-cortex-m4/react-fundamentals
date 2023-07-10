import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import AddAuthor from "./components/AddAuthor/AddAuthor";
import Authors from "./components/Authors/Authors";
import { getCourseDuration } from '../../helpers/time';
import { fetchData } from '../../common/utils/fetchData';
// import { useValidation } from "./useValidation";
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
  const [validationData, setValidationData] = useState({
    title: false,
    description: false,
    duration: false,
    //    authors: false,
  });
  const [isFormValid, setIsFormValid] = useState(false);


  //   const [validationData, validateForm] = useValidation();
  //   const [duration, setDuration] = useState('');
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
    setFormData({ ...formData, [name]: value });
    //     validateForm(event.target);
  };

  const onTitleChange = event => {
    console.log('onTitleChange');

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('formData=' + JSON.stringify(formData));

    validationData.title = value.length > 0;
    console.log('validationData=' + JSON.stringify(validationData));

    if (validationData.title && validationData.description && validationData.duration)
      setIsFormValid(true);
    else
      setIsFormValid(false);
  };

  const onDescriptionChange = event => {
    console.log('onDescriptionChange');

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('formData=' + JSON.stringify(formData));

    validationData.description = value.length > 0;
    console.log('validationData=' + JSON.stringify(validationData));

    if (validationData.title && validationData.description && validationData.duration)
      setIsFormValid(true);
    else
      setIsFormValid(false);
  };

  const onDurationChange = event => {
    console.log('onDurationChange');

    const { name, value } = event.target;
    //     setDuration(value);

    console.log('typeof1' + typeof value);
    const duration = Number(value);
    console.log('typeof2' + typeof duration);


    validationData.duration = value.length > 0 && !isNaN(duration) && Number(value) > 0;
    console.log('validationData=' + JSON.stringify(validationData));

    setFormData({ ...formData, [name]: value });
    console.log('formData=' + JSON.stringify(formData));

    if (validationData.title && validationData.description && validationData.duration)
      setIsFormValid(true);
    else
      setIsFormValid(false);
  };

  //   const formattedDuration = getCourseDuration(Number(duration));

  const onAddAuthorButtonClick = authorId => {
    const authorToBeAdded = authors.find(({ id }) => id === authorId);
    const filteredAuthors = authors.filter(({ id }) => id !== authorId);
    setFormData({ ...formData, authors: [...formData.authors, authorToBeAdded] });
    setAuthors(filteredAuthors);
    //     validateForm({ name: 'authors', value: true });
  };

  const onDeleteAuthorButtonClick = authorId => {
    const authorToBeAdded = formData.authors.find(({ id }) => id === authorId);
    const filteredAuthors = formData.authors.filter(({ id }) => id !== authorId);
    //     validateForm({ name: 'authors', value: formData.authors.length > 1 });
    setAuthors([...authors, authorToBeAdded]);
    setFormData({ ...formData, authors: filteredAuthors });
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

    if (!error && successful) {
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
          valid={validationData.title}
          onChange={onTitleChange}
        />
        <Textarea
          labelText='Description'
          placeholder="Enter description"
          name='description'
          value={formData.description}
          valid={validationData.description}
          onChange={onDescriptionChange}
        />

        <Input
          labelText='Duration'
          placeholder='Enter duration (in minutes)...'
          type='number'
          name='duration'
          value={formData.duration}
          valid={validationData.duration}
          onChange={onDurationChange}
        />

        <Button
          type='submit'
          buttonText='Create course'
          disabled={!isFormValid}
        />
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.authorsContainer}>
          <AddAuthor
            setIsAuthorAdded={setIsAuthorAdded}
          />

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
