export const editUser = user => (
      $.ajax ({
          method: 'GET',
          url: `api/user/edit`,
          user
      })
)

