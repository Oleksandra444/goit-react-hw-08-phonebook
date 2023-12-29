
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { ContactCardWrappper, ContactCardValue, ContactCardDelButton,ContactValuedWrappper, IconWrapper } from './ContactCard.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/api';

export const ContactCard = ({ name, number, id}) => {
    const dispatch = useDispatch();
    
    
    const onDelete = () => {
        dispatch(deleteContact(id));
    };
    
      
    return (
    <>
        <ContactCardWrappper>
                <ContactValuedWrappper>
                    <IconWrapper>
                        <HiOutlineDevicePhoneMobile />
                        </IconWrapper>
                <ContactCardValue>{name} : {number}</ContactCardValue>
                </ContactValuedWrappper>
            <ContactCardDelButton onClick={onDelete}>Delete</ContactCardDelButton>
        </ContactCardWrappper>
        
    </>)
}