async function newPostEvent(event) {
  event.preventDefault()
  const post_subject = document.querySelector('#post_subject').value
  const post_author = document.querySelector('#post_author').value
  const post_entry = document.querySelector('#post_entry').value

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ]

  const response = await fetch(`/api/post/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      post_subject,
      post_author,
      post_entry
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (response.ok) {
    document.location.replace(`/post/${id}`)
  } else {
    alert('Unable to edit post at this time')
  }
}

document
  .querySelector('***NEEDS-EDIT')
  .addEventListener('Save', editFormHandler)
