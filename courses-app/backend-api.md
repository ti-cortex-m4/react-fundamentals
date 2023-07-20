AuthController {}
Mapped {/login, POST} route
Mapped {/register, POST} route
Mapped {/logout, DELETE} route

CoursesController {/courses}
Mapped {/courses/all, GET} route
Mapped {/courses/filter, GET} route
Mapped {/courses/add, POST} route
Mapped {/courses/:id, GET} route
Mapped {/courses/:id, PUT} route
Mapped {/courses/:id, DELETE} route

AuthorsController {/authors}
Mapped {/authors/all, GET} route
Mapped {/authors/add, POST} route
Mapped {/authors/:id, GET} route
Mapped {/authors/:id, PUT} route
Mapped {/authors/:id, DELETE} route

UsersController {/users}
Mapped {/users/me, GET} route
