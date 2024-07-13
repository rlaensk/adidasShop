import { createSlice } from "@reduxjs/toolkit";

let sizeModal = createSlice({
  name: "sizeModal",
  initialState: false,
  reducers: {
    openSizeModal: (state) => true,
    closeSizeModal: (state) => false,
  },
});

let deliveryModal = createSlice({
  name: "deliveryModal",
  initialState: false,
  reducers: {
    openDeliveryModal: (state) => true,
    closeDeliveryModal: (state) => false,
  },
});

let precautionsModal = createSlice({
  name: "precautionsModal",
  initialState: false,
  reducers: {
    openPrecautionsModal: (state) => true,
    closePrecautionsModal: (state) => false,
  },
});

let asModal = createSlice({
  name: "asModal",
  initialState: false,
  reducers: {
    openAsModal: (state) => true,
    closeAsModal: (state) => false,
  },
});

let infoModal = createSlice({
  name: "infoModal",
  initialState: false,
  reducers: {
    openInfoModal: (state) => true,
    closeInfoModal: (state) => false,
  },
});

export let {
  openSizeModal,
  closeSizeModal,
  openDeliveryModal,
  closeDeliveryModal,
  openPrecautionsModal,
  closePrecautionsModal,
  openAsModal,
  closeAsModal,
  openInfoModal,
  closeInfoModal,
} = {
  ...sizeModal.actions,
  ...deliveryModal.actions,
  ...precautionsModal.actions,
  ...asModal.actions,
  ...infoModal.actions,
};

// Redux store를 설정합니다.
export { sizeModal, deliveryModal, precautionsModal, asModal, infoModal };
