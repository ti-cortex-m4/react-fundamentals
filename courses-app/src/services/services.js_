import getUserFromLocalStorage from '../helpers/getUserFromLocalStorage';
class APIService {
  getAllCourses() {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/all`);
  }

  addCourse(title, description, duration, authors) {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
      body: JSON.stringify({
        title,
        description,
        duration,
        authors,
      }),
    });
  }
  getCourseById(id) {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/${id}`);
  }
  updateCourse(id, body) {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
      body: JSON.stringify(body),
    });
  }
  deleteCourse(id) {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
    });
  }
  getAllAuthors() {
    return fetch(`${process.env.REACT_APP_API_URL}/authors/all`);
  }
  addAuthor(name) {
    return fetch(`${process.env.REACT_APP_API_URL}/authors/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
      body: JSON.stringify({
        name,
      }),
    });
  }
  getAuthorById(id) {
    return fetch(`${process.env.REACT_APP_API_URL}/authors/${id}`);
  }
  login(email, password) {
    return fetch(`${process.env.REACT_APP_API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  registration(name, email, password) {
    return fetch(`${process.env.REACT_APP_API_URL}/register`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        email,
        password,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
  getCurrentUser() {
    return fetch(`${process.env.REACT_APP_API_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
    });
  }
  logoutUser() {
    return fetch(`${process.env.REACT_APP_API_URL}/logout`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${getUserFromLocalStorage()?.token}`,
      },
    });
  }
}

const apiService = new APIService();

export default apiService;
