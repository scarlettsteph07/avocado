import React, { useState } from 'react'
import Modal from 'react-modal'

import styled from '../styled'
import { IngredientForm } from './'
import { StyledIconButton } from './styled/'

type Props = {}

export const CustomModal: React.FunctionComponent<Props> = () => {
  Modal.setAppElement('#root')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (): void => {
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
  }

  const customStyles = {
    content: {
      width: '70%',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      display: 'flex',
      flexFlow: 'column',
      border: '2px solid #202020',
      borderRadius: '3px',
    },
  }

  return (
    <CustomModalStyles>
      <OpenIconButton onClick={openModal} />
      <Modal
        contentLabel="Modal"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <CloseIconButton onClick={closeModal} />
        <IngredientForm />
      </Modal>
    </CustomModalStyles>
  )
}

const OpenIconButton = styled(StyledIconButton)`
  margin: 0;
  background-image: url(/svg/icon--plus.svg);
  align-self: flex-end;
`

const CloseIconButton = styled(StyledIconButton)`
  margin: 0;
  background-image: url(/svg/icon--x.svg);
  align-self: flex-end;
`
const CustomModalStyles = styled.div``
