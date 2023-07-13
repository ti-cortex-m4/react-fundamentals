import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '../../components/Button/Button';
import { Input } from '../../components/Input/Input';
import { Textarea } from '../../components/Textarea/Textarea';
import CreateAuthor from "./components/CreateAuthor/CreateAuthor";
import Authors from "./components/Authors/Authors";
import { fetchData } from '../../common/utils/fetchData';
import { APP_REQUEST_PATHS, APP_URL_PATHS } from '../../constants';
import styles from './styles.module.css';

export const CourseForm = ({ allAuthors, allCourses }) => {

  const navigate = useNavigate();

  const { courseId } = useParams();
  console.log('courseId=' + courseId);
  const updatingCourse = allCourses.find((course) => course.id === courseId);
  console.log('updatingCourse=' + JSON.stringify(updatingCourse));
  console.log('title=' + (courseId ? updatingCourse.title : ''));

  const [formData, setFormData] = useState({
    title: courseId ? updatingCourse.title : '',
    description: courseId ? updatingCourse.description : '',
    duration: courseId ? updatingCourse.duration : '',
    authors: courseId ? updatingCourse.authors.map(authorId => allAuthors.find((author) => author.id === authorId)) : [],
  });
  console.log('formData=' + JSON.stringify(formData));

  const [validationData, setValidationData] = useState({
    title: courseId ? true : false,
    description: courseId ? true : false,
    duration: courseId ? true : false,
    authors: courseId ? true : false,
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const [isAuthorAdded, setIsAuthorAdded] = useState(false);

  const [authors, setAuthors] = useState([]);


  useEffect(() => {
    const getAllAuthors = async () => {
      const { response, error } = await fetchData({
        method: 'GET',
        url: APP_REQUEST_PATHS.getAllAuthors,
      });

      if (!error && response.successful) {
        setAuthors(response.result);
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

  const updateFormValidation = () => {
    if (validationData.title && validationData.description && validationData.duration && validationData.authors)
      setIsFormValid(true);
    else
      setIsFormValid(false);
  }

  const onTitleChange = event => {
    console.log('onTitleChange');

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('formData=' + JSON.stringify(formData));

    validationData.title = value.length > 0;
    console.log('validationData=' + JSON.stringify(validationData));

    updateFormValidation();
  };

  const onDescriptionChange = event => {
    console.log('onDescriptionChange');

    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log('formData=' + JSON.stringify(formData));

    validationData.description = value.length > 0;
    console.log('validationData=' + JSON.stringify(validationData));

    updateFormValidation();
  };

  const onDurationChange = event => {
    console.log('onDurationChange');

    const { name, value } = event.target;

    const valid = !isNaN(Number(value)) && Number(value) > 0;

    validationData.duration = valid;
    console.log('validationData=' + JSON.stringify(validationData));

    setFormData({ ...formData, [name]: valid ? Number(value) : value });
    console.log('formData=' + JSON.stringify(formData));

    updateFormValidation();
  };

  const handleAddAuthorButtonClick = authorId => {
    console.log('onAddAuthorButtonClick');

    const addedAuthor = authors.find(({ id }) => id === authorId);
    const availableAuthors = authors.filter(({ id }) => id !== authorId);
    const updatedAuthors = [...formData.authors, addedAuthor];
    setFormData({ ...formData, authors: updatedAuthors });
    setAuthors(availableAuthors);

    //     console.log('formData=' + JSON.stringify(formData));
    validationData.authors = updatedAuthors.length > 0;
    updateFormValidation();
  };

  const handleDeleteAuthorButtonClick = authorId => {
    console.log('onDeleteAuthorButtonClick');

    const deletedAuthor = formData.authors.find(({ id }) => id === authorId);
    const availableAuthors = formData.authors.filter(({ id }) => id !== authorId);
    const updatedAuthors = availableAuthors;
    setAuthors([...authors, deletedAuthor]);
    setFormData({ ...formData, authors: updatedAuthors });

    //     console.log('formData=' + JSON.stringify(formData));
    validationData.authors = updatedAuthors.length > 0;
    updateFormValidation();
  };

  const handleFormSubmit = async event => {
    event.preventDefault();
    const authors = formData.authors.map(({ id }) => id);

    const fetchConfig = {
      url: APP_REQUEST_PATHS.addCourse,
      method: 'POST',
      body: { ...formData, authors },
    };
    const { response, error } = await fetchData(fetchConfig);

    if (!error && response.successful) {
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
          buttonText={courseId ? 'Update course' : 'Create course'}
          disabled={!isFormValid}
        />
      </div>

      <div className={styles.infoWrapper}>
        <div className={styles.authorsContainer}>

          <strong>Authors</strong>
          <Authors
            authors={authors}
            buttonText='Add author'
            handleButtonClick={handleAddAuthorButtonClick}
          />

          <strong>Course authors</strong>
          <Authors
            authors={formData.authors}
            buttonText='Delete author'
            handleButtonClick={handleDeleteAuthorButtonClick}
          />
        </div>
        <CreateAuthor
          setIsAuthorAdded={setIsAuthorAdded}
        />
      </div>
    </form>
  );
};
