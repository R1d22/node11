const formEl = document.forms.profile;
formEl.addEventListener('submit', async (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);

    const { data } = await axios.post('/test', formData);
    console.log(data);
});