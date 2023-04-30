const postForm = document.getElementById('post-form');

postForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const formData = new FormData(postForm);

  try {
    const response = await fetch('/api/parties', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Post created successfully');
      postForm.reset();
    } else {
      alert('Error creating post');
    }
  } catch (error) {
    console.error(error);
    alert('Error creating post');
  }
});
