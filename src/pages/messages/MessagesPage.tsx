import {
    Box,
    Container,
    Typography,
    List,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
    ListItemButton,
  } from "@mui/material";
import { mockMessages } from "../../mocks/mockMessagesData";
import DashboardLayout from "../../components/DashboardLayout";
  
  export default function MessagesPage() {
    return (
      <DashboardLayout>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Typography variant="h4" fontWeight={700} gutterBottom textAlign="center">
            Messages
          </Typography>
  
          <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
            {mockMessages.map((msg) => (
              <Box key={msg.id}>
                <ListItemButton alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar alt={msg.senderName} src={msg.senderAvatar} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={msg.senderName}
                    secondary={
                      <>
                        <Typography
                          sx={{ display: 'inline' }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {msg.lastMessage}
                        </Typography>
                        {" — "}
                        {msg.timestamp}
                      </>
                    }
                  />
                </ListItemButton>
                <Divider variant="inset" component="li" />
              </Box>
            ))}
          </List>
        </Container>
      </DashboardLayout>
    );
  }
  