import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "./CabinTable";

function AddCabin() {
  return (
    <>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>

      {/* <Modal>
        <Modal.Open opens="table">
          <Button>Show table</Button>
        </Modal.Open>
        <Modal.Window name="table">
          <CabinTable />
        </Modal.Window>
      </Modal> */}
    </>
  );
}

// function AddCabin() {
//   const [showForm, setShowForm] = useState(false);
//   return (
//     <div>
//       <Button
//         onClick={() => {
//           setShowForm((show) => !show);
//         }}
//       >
//         {" "}
//         Add new cabin
//       </Button>
//       {showForm && (
//         <Modal
//           onCloseModal={() => {
//             setShowForm(false);
//           }}
//         >
//           <CreateCabinForm
//             onCloseModal={() => {
//               setShowForm(false);
//             }}
//           />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
