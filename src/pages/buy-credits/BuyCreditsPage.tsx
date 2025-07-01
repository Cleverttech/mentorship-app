import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
} from '@mui/material';

// Mock credit packages
const creditPackages = [
  { id: 1, credits: 10, price: '$10' },
  { id: 2, credits: 25, price: '$22' },
  { id: 3, credits: 50, price: '$40' },
];

export default function BuyCreditsPage() {
  const currentCredits = 50; // replace with context or fetched data later

  const handlePurchase = (pkg: any) => {
    alert(`Purchased ${pkg.credits} credits for ${pkg.price}!`);
    // TODO: implement real purchase logic later
  };

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
        Buy Credits
      </Typography>

      <Box textAlign="center" mb={4}>
        <Typography variant="h6">Your Current Credits</Typography>
        <Typography variant="h3" color="primary">
          {currentCredits}
        </Typography>
      </Box>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={2}>
        {creditPackages.map((pkg) => (
          <Box
            key={pkg.id}
            sx={{
              width: { xs: '100%', sm: '30%' },
            }}
          >
            <Card
              elevation={0}
              sx={{ border: '1px solid #e0e0e0', borderRadius: 2 }}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6">{pkg.credits} Credits</Typography>
                <Typography variant="body1">{pkg.price}</Typography>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                  onClick={() => handlePurchase(pkg)}
                >
                  Buy
                </Button>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
