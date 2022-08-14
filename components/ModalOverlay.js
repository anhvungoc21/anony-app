export default function ModalOverlay({ handleDisplayModal }) {
  return (
    <div
      className="fixed bg-black h-screen w-screen opacity-20 modal-transition "
      onClick={() => handleDisplayModal(false)}
    ></div>
  );
}
