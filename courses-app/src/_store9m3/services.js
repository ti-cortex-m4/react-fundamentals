class APIService {
  getCourses() {
    return fetch(`${process.env.REACT_APP_API_URL}/courses/all`);
  }
  getAuthors() {
    return fetch(`${process.env.REACT_APP_API_URL}/authors/all`);
  }
}

const apiService = new APIService();

export default apiService;
