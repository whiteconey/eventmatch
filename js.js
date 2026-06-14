function openForm(){
    document.getElementById('eventFormModal').style.display="block";
    document.body.style.overflow = 'hidden';
}

function closeForm(){
    document.getElementById('eventFormModal').style.display="none";
    document.body.style.overflow = '';
}
window.addEventListener('click', (event) => {
    modal=document.getElementById('eventFormModal');
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });