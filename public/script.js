document.addEventListener('DOMContentLoaded', function() {
    const userForm = document.getElementById('userForm');
    const editForm = document.getElementById('editForm');
    const editModal = new bootstrap.Modal(document.getElementById('editModal'));

    userForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const formData = new FormData(userForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        try {
            const response = await fetch('/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error adding user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error adding user');
        }
    });

    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const email = this.getAttribute('data-email');

            document.getElementById('editId').value = id;
            document.getElementById('editName').value = name;
            document.getElementById('editEmail').value = email;

            editModal.show();
        });
    });

    editForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        const id = document.getElementById('editId').value;
        const formData = new FormData(editForm);
        const userData = {
            name: formData.get('name'),
            email: formData.get('email')
        };

        try {
            const response = await fetch(`/users/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData)
            });

            if (response.ok) {
                editModal.hide();
                window.location.reload();
            } else {
                alert('Error updating user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error updating user');
        }
    });

    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function() {
            const id = this.getAttribute('data-id');
            
            if (confirm('Are you sure you want to delete this user?')) {
                deleteUser(id);
            }
        });
    });

    async function deleteUser(id) {
        try {
            const response = await fetch(`/users/${id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                window.location.reload();
            } else {
                alert('Error deleting user');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Error deleting user');
        }
    }
}); 