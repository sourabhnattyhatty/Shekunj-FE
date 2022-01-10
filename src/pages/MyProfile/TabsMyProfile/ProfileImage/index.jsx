import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import EditIcon from "@mui/icons-material/Edit";

import { noImage } from "../../../../utils/ApiServices";
import { checkIsValidImage } from "../../../../utils";
import { toast } from "react-toastify";
import { updateProfile } from "../../../../store/auth/action";
import { Avatar } from "@mui/material";
import { useTranslation } from "react-i18next";

import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { convertRelativeUriToFile } from "../../../../utils/utils";

const ProfileImage = ({ isEditable }) => {
  const [fileName, setFileName] = useState("");
  const [image, setImage] = useState(null);
  const [cropData, setCropData] = useState("#");
  const [cropper, setCropper] = useState();
  const [show, setShow] = useState(false);
  const inputRef = useRef(null);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer);
  const { t } = useTranslation();

  const onChange = (e) => {
    e.preventDefault();
    setShow(true);
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
    setFileName(files[0].name);
  };

  const getCropData = () => {
    setShow(false);
    if (typeof cropper !== "undefined") {
      setCropData(cropper.getCroppedCanvas().toDataURL());
    }
    convertRelativeUriToFile(
      cropper.getCroppedCanvas().toDataURL(),
      fileName,
      null,
      async (file) => {
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
          toast.error(t("error.other.3"));
        }
      },
    );
  };

  // const handleImageChange = ({ target }) => {
  //   const file = target?.files[0] || null;
  //   debugger;
  //   if (file) {
  //     if (!checkIsValidImage(file)) {
  //       inputRef.current.value = "";
  //     } else {
  //       dispatch(
  //         updateProfile(user?.id, {
  //           profile_pic: file,
  //           name: user.name,
  //           last_name: user.last_name,
  //         }),
  //       );
  //     }
  //   } else {
  //     toast.error(t("error.other.3"));
  //   }
  // };

  const onButtonClick = () => {
    inputRef?.current?.click();
  };
  return (
    <>
      {show && <button onClick={getCropData}>Crop Image</button>}
      <div className='myProfile_img'>
        <Avatar
          src={user?.profile_pic || noImage}
          sx={{ width: 200, height: 200 }}
        />
        <input
          type='file'
          id='file'
          ref={inputRef}
          hidden
          onChange={onChange}
          // onChange={handleImageChange}
        />
        {show && (
          <Cropper
            style={{ height: 400, width: "100%" }}
            zoomTo={0.5}
            initialAspectRatio={1}
            preview='.img-preview'
            src={image}
            viewMode={1}
            minCropBoxHeight={10}
            minCropBoxWidth={10}
            background={false}
            responsive={true}
            autoCropArea={1}
            checkOrientation={false}
            onInitialized={(instance) => {
              setCropper(instance);
            }}
            guides={true}
          />
        )}
        {isEditable && (
          <EditIcon onClick={() => onButtonClick()} className='pointer' />
        )}
      </div>
    </>
  );
};

export default ProfileImage;
