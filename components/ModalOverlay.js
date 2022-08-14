export default function ModalOverlay({ handleDisplayModal }) {
  return (
    <div
      className="fixed bg-transparent h-screen w-screen modal-transition "
      onClick={() => handleDisplayModal(false)}
    ></div>
  );
}
