import { FaTrash } from "react-icons/fa";
import styles from "./UserList.module.css";

function UserListItem(props) {
  const {
    selectUser,
    deleteUser,
    user: { id, firstName, lastName, age, imgSrc, isSelected },
  } = props;

  const inlineStyle = {
    backgroundColor: isSelected ? "yellow" : "transparent",
  };

  return (
    <li
      className={styles.li}
      style={inlineStyle}
      onClick={() => selectUser(id)}
    >
      <img
        className={styles.img}
        src={imgSrc}
        alt={`${firstName} ${lastName}`}
      />
      <div className={styles.content}>
        <h3 className={styles.h3}>
          {firstName} {lastName}
        </h3>
        <p className={styles.p}>{age}</p>
      </div>
      <button
        className={styles.FaTrash}
        onClick={(e) => {
          e.stopPropagation();
          deleteUser(id)
        }}
      >
        <FaTrash />
      </button>
    </li>
  );
}
export default UserListItem;
