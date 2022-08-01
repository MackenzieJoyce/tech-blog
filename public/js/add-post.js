async function newPostEvent(event) {
  event.preventDefault()
  const post_subject = document.querySelector('#post_subject').value
  const post_author = document.querySelector('#post_author').value
  const post_entry = document.querySelector('#post_entry').value

  const response = await fetch(`/api/entry`, {
    method: 'POST',
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
    document.location.replace('/')
  } else {
    alert('Cannot add post at this time')
  }
}

document.querySelector('.***CREATE-FORM-FOR-NEW-POST***')

// This all happens in the dashboard
// Only when you select the specific post
