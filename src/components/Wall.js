import React from 'react';
import Modal from 'react-modal';


Const CreateWall = () => {
    Const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <div className='CreateWall'>
            <button OnClick={() => setModalIsOpen(true)}> Create Wall</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <form>
                <div ClassName="form-control">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title"></input>
                </div>
                <div ClassName="form-control">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5"></input>
                </div>
            </form>
            
            <h2>Study Course Title: </h2>
            <h3> Description:</h3>
            <div>
                <button onClick={() => SetModalIsOpen(false)}>Close/Submit</button>
            </div>
            </Modal>
        </div>
    )
}


export default CreateWall;