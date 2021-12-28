import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

import { noImage } from "../../../../utils/ApiServices";
import { checkIsValidImage } from "../../../../utils";
import { toast } from "react-toastify";
import { updateProfile } from "../../../../store/auth/action";

const ProfileImage = ({ isEditable }) => {
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);

  const handleImageChange = ({ target }) => {
    const file = target?.files[0] || null;
    if (file) {
      if (!checkIsValidImage(file)) {
        inputRef.current.value = "";
      } else {
        dispatch(
          updateProfile(user?.id, {
            profile_pic: file,
            name: user.name,
            last_name: user.last_name,
          }),
        );
      }
    } else {
      toast.error("Please select valid file");
    }
  };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };
  return (
    <>
      <div className='myProfile_img'>
        <img
          src={user?.profile_pic || noImage}
          style={{ width: "-webkit-fill-available" }}
          alt={user?.name}
        />
        <input
          type='file'
          id='file'
          ref={inputRef}
          hidden
          onChange={handleImageChange}
        />
        {isEditable && (
          <EditIcon onClick={() => onButtonClick()} className='pointer' />
        )}
      </div>
    </>
  );
};

export default ProfileImage;
