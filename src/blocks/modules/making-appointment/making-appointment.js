'use strict';
import axios from "axios";

(function () {
    const headerButton = document.getElementById('making-appointment-button');

    const form = document.querySelector('.making-appointment__form');
    const nameInput = document.querySelector('.form__input_name');
    const nameWrap = document.querySelector('.form__wrap_name');
    const telInput = document.querySelector('.form__input_tel');
    const telWrap = document.querySelector('.form__wrap_tel');
    const approveCheck = document.querySelector('.form__check');
    const approveWrap = document.querySelector('.form__wrap_check');
    const formButton = document.querySelector('.form__button');
    const formButtonCross = document.querySelector('.making-appointment__button-cross');

    const makingAppointmentModal = document.querySelector('.making-appointment');
    const makingAppointmentSuccessModal = document.querySelector('.appointment-success');
    const appointmentButtonCross = document.querySelector('.appointment-success__button-cross');
    const appointmentButton = document.querySelector('.appointment-success__button');

    let name = '';
    let tel = '';
    let check = false;

    const addClass = (elem, className) => {
        elem.classList.add(className);
    }

    const removeClass = (elem, className) => {
        elem.classList.remove(className);
    }

    const openForm = () => {
        addClass(makingAppointmentModal, 'making-appointment_open');
    }

    const closeForm = () => {
        removeClass(makingAppointmentModal, 'making-appointment_open');
    }

    const openSuccess = () => {
        addClass(makingAppointmentSuccessModal, 'appointment-success_open');
    }

    const closeSuccess = () => {
        removeClass(makingAppointmentSuccessModal, 'appointment-success_open');
    }

    const nameInputHandler = (evt) => {
        removeClass(nameWrap, 'form__wrap_error');
        nameInput.value = evt.target.value;
        name = nameInput.value;
        name.length ? removeClass(nameWrap, 'form__wrap_empty') : addClass(nameWrap, 'form__wrap_empty');
    }

    const telInputHandler = (evt) => {
        removeClass(telWrap, 'form__wrap_error');
        telInput.value = evt.target.value;
        tel = telInput.value
        tel.length ? removeClass(telWrap, 'form__wrap_empty'): addClass(telWrap, 'form__wrap_empty');
    }

    const approveCheckHandler = (evt) => {
        removeClass(approveCheck, 'form__wrap_error');
        approveCheck.value = evt.target.checked;
        check = approveCheck.value
    }

    const validateCheck = () => {
        if (!name.length || !tel.length ||!check) {
            if (!name.length) {
                addClass(nameWrap, 'form__wrap_error');
            }
            if (!tel.length) {
                addClass(telWrap, 'form__wrap_error');
            }
            if (!check) {
                addClass(approveWrap, 'form__wrap_error');
            }
            return false;
        }
        return true;
    }

    const submitForm = () => {
        if (!validateCheck()) return;
        axios.post(` http://localhost:3000/lists`, {
            name: name,
            tel: tel,
            approve: check
        }).then((resp) => {
            form.reset();
            closeForm();
            openSuccess();
            return resp
        }).catch((error) => {
            console.log(error);
        })
    }

    nameInput.addEventListener('input', nameInputHandler);
    telInput.addEventListener('input', telInputHandler);
    approveCheck.addEventListener('change', approveCheckHandler);
    formButton.addEventListener('click', submitForm);
    headerButton.addEventListener('click', openForm);
    formButtonCross.addEventListener('click', closeForm);
    appointmentButtonCross.addEventListener('click', closeSuccess);
    appointmentButton.addEventListener('click', closeSuccess);

})();