import Button from '../../ui/Button';
import CreateCabinForm from './CreateCabinForm';
import Modal from '../../ui/Modal';

const AddCabin = () => {
  return (
    // <div>
    //   <Button onClick={() => setIsOpenModal((isOpenModal) => !isOpenModal)}>
    //     Add new Cabin
    //   </Button>
    //   {isOpenModal && (
    //     <Modal onClose={() => setIsOpenModal(false)}>
    //       <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
    //     </Modal>
    //   )}
    // </div>
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button> Add New Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
};

export default AddCabin;
