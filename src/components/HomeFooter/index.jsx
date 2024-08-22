import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import * as C from './styles';

export function HomeFooter() {
  return (
    <>
      <C.Footer>
        <C.ContainerFooter>
          <C.ContainerOne>
            <C.Whatsapp>
                <div  style={{
                overflowY: 'hidden',
                display: 'inline-block', // Needed for the icons to behave properly
                transition: 'transform 0.3s ease-in-out'
              }}>
              <WhatsAppIcon
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              />
              </div>
              <p>(41)99933-2332</p>
            </C.Whatsapp>
            <C.Email>
                <div  style={{
                overflowY: 'hidden',
                display: 'inline-block', // Needed for the icons to behave properly
                transition: 'transform 0.3s ease-in-out'
              }}>
              <EmailIcon
                sx={{
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              />
              </div>
              <p>contato@empresa.com</p>
            </C.Email>
          </C.ContainerOne>
          <C.ContainerTwo>
            <div
              style={{
                overflowY: 'hidden',
                display: 'inline-block', // Needed for the icons to behave properly
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <InstagramIcon
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              />
            </div>
            <div
              style={{
                overflowY: 'hidden',
                display: 'inline-block', // Needed for the icons to behave properly
                transition: 'transform 0.3s ease-in-out'
              }}
            >
              <LinkedInIcon
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': { transform: 'scale(1.2)' }
                }}
              />
            </div>
          </C.ContainerTwo>
        </C.ContainerFooter>
      </C.Footer>
    </>
  );
}
