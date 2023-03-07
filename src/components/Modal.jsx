import React, { useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { modalState } from '../atoms/modaAtom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

export default function Example() {
    const [modalStateValue, setModalStateValue] = useRecoilState(modalState)

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>

            {/* <button type="button" class="btn btn-primary" onClick={()=>setShow(true)}>
                Launch demo modal
            </button> */}


            {modalStateValue && <div class="modal" style={{ display: 'block' }}>
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" class="btn-close" onClick={() => setModalStateValue(false)}></button>
                        </div>
                        <div class="modal-body">
                            ...
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setModalStateValue(false)}>Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>}
        </>
    );
}
