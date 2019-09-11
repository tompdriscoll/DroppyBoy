export const fetchUploads = () => (
    $.ajax({
      method: 'GET',
      url: 'api/uploads',
    })
  );
  
  export const fetchUpload = id => (
    $.ajax({
      method: 'GET',
      url: `api/uploads/${id}`
    })
  );

  export const createUpload = upload => (
    $.ajax({
      method: 'POST',
      url: 'api/uploads',
      upload
    })
  );

  export const editUpload = upload => (
      $.ajax ({
          method: 'PATCH',
          url: `api/uploads/${id}`,
          upload
      })
  )

  export const deleteUpdate = id => (
      $.ajax ({
          method: 'DELETE',
          url: `api/uploads/${id}`
      })
  )