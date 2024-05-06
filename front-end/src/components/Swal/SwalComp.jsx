import Swal from 'sweetalert2';

function SwalComp(message, icon, path, navigate) {

    return Swal.fire({
        title: 'Thông báo',
        text: message,
        icon: icon,
        showConfirmButton: true,
    }).then(function () {
        navigate(path);
    });
}

export default SwalComp;
