import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { Button } from '../../common/Button/Button';
import { Input } from '../../common/Input/Input';
import { Textarea } from '../../common/Textarea/Textarea';
import CreateAuthor from './components/CreateAuthor/CreateAuthor';
import Authors from './components/Authors/Authors';
import { fetchData } from '../../helpers/fetchData';
import { getAllAuthors } from '../../services/author';
// import { addCourse, updateCourse } from '../../services/course';
import { BACKEND_PATHS, FRONTEND_PATHS } from '../../constants';

// import { addCourseAction } from '../../_store/courses/actions';
// import { addAuthorAction } from '../../_store/authors/actions';
import { getAuthorsSelector } from '../../_store/authors/selectors';
import { getCoursesSelector } from '../../_store/courses/selectors';
import { addCourse, updateCourse } from '../../_store/courses/thunk';

import styles from './styles.module.css';

/* TODO */ export const CourseForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const allAuthors = useSelector(getAuthorsSelector);
  const allCourses = useSelector(getCoursesSelector);

  const { courseId } = useParams();
  const updatingCourse = allCourses.find((course) => course.id === courseId);

  const [formData, setFormData] = useState({
    title: courseId ? updatingCourse.title : '',
    description: courseId ? updatingCourse.description : '',
    duration: courseId ? updatingCourse.duration : '',
    authors: courseId ? updatingCourse.authors.map(authorId => allAuthors.find((author) => author.id === authorId)) : [],
  });

  const [formValidation, setFormValidation] = useState({
    title: courseId ? true : false,
    description: courseId ? true : false,
    duration: courseId ? true : false,
    authors: courseId ? true : false,
  });

  const [isFormValid, setIsFormValid] = useState(false);
  const [isAuthorAdded, setIsAuthorAdded] = useState(false);
  const [authors, setAuthors] = useState([]);

//   useEffect(() => {
//     getAllAuthors(
//       (response, error) => {
//         setAuthors(response.result);
//         setIsAuthorAdded(false);
//       },
//       (response, error) => { }
//     );
//   }, [isAuthorAdded]);

  const updateFormValidation = () => {
    setIsFormValid(formValidation.title && formValidation.description && formValidation.duration && formValidation.authors);
  }

  const handleTitleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    formValidation.title = value.length > 0;
    updateFormValidation();
  };

  const handleDescriptionChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    formValidation.description = value.length > 0;
    updateFormValidation();
  };

  const handleDurationChange = event => {
    const { name, value } = event.target;
    const valid = !isNaN(Number(value)) && Number(value) > 0;

    formValidation.duration = valid;
    setFormData({ ...formData, [name]: valid ? Number(value) : value });

    updateFormValidation();
  };

  const handleAddAuthorButtonClick = authorId => {
    const addedAuthor = authors.find(({ id }) => id === authorId);
    const availableAuthors = authors.filter(({ id }) => id !== authorId);
    const updatedAuthors = [...formData.authors, addedAuthor];

    setFormData({ ...formData, authors: updatedAuthors });
    setAuthors(availableAuthors);

    formValidation.authors = updatedAuthors.length > 0;
    updateFormValidation();
  };

  const handleDeleteAuthorButtonClick = authorId => {
    const deletedAuthor = formData.authors.find(({ id }) => id === authorId);
    const availableAuthors = formData.authors.filter(({ id }) => id !== authorId);
    const updatedAuthors = availableAuthors;

    setAuthors([...authors, deletedAuthor]);
    setFormData({ ...formData, authors: updatedAuthors });

    formValidation.authors = updatedAuthors.length > 0;
    updateFormValidation();
  };

  const handleFormSubmit = async event => {
    event.preventDefault();

    const authors = formData.authors.map(({ id }) => id);
    const body = { ...formData, authors };

//     if (courseId) {
//       updateCourse(
//        courseId,
//        body,
//         (response, error) => {
//         navigate(FRONTEND_PATHS.courses);
//         },
//         (response, error) => { }
//       );
//     } else {
//       addCourse(
//        body,
//         (response, error) => {
//         navigate(FRONTEND_PATHS.courses);
//         },
//         (response, error) => { }
//       );
//     }

    if (courseId) {
      dispatch(updateCourse(courseId, body));
    } else {
      dispatch(addCourse(body));
    }

    navigate(FRONTEND_PATHS.courses);
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
          valid={formValidation.title}
          onChange={handleTitleChange}
        />
        <Textarea
          labelText='Description'
          placeholder='Enter description'
          name='description'
          value={formData.description}
          valid={formValidation.description}
          onChange={handleDescriptionChange}
        />
        <Input
          labelText='Duration'
          placeholder='Enter duration (in minutes)...'
          type='number'
          name='duration'
          value={formData.duration}
          valid={formValidation.duration}
          onChange={handleDurationChange}
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
        <CreateAuthor /*setIsAuthorAdded={setIsAuthorAdded}*/ />
      </div>
    </form>
  );
};

export default CourseForm;
