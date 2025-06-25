import {
    Card,
    CardContent,
    Typography,
    Stack,
    Button,
  } from "@mui/material";
  
  interface Article {
    id: string;
    title: string;
    author: string;
    date: string;
  }
  
  export default function ArticleCard({ article }: { article: Article }) {
    return (
      <Card elevation={0} sx={{ border: "1px solid #e0e0e0", borderRadius: 2 }}>
        <CardContent>
          <Stack spacing={1}>
            <Typography fontWeight={600}>{article.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              By {article.author}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              📅 {article.date}
            </Typography>
            <Button variant="text" size="small">Read Article</Button>
          </Stack>
        </CardContent>
      </Card>
    );
  }
  