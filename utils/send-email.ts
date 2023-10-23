 

const sendEmail = (data:FormPropsContact) => {
    const apiEndpoint = '/api/email/route';

    fetch(apiEndpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((response) => { 
        console.log(response.message)
        
      })
      .catch((err) => {
        alert(err);
      });
}

export default sendEmail