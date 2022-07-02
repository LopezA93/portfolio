import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';


export default function Trabajos(props) {
    const { img, url, tittle, skills, id } = props

    return (
        <>
            <div className="proyectos">
            <a className="proyectoCard" href={url} target="_blank" >
                <Card sx={{ height: '300px', width: "400px" }} key={id}>
                    <CardCover>
                        <img 
                            
                            src={img}
                            alt={tittle}
                        />
                    </CardCover>
                    <CardCover
                        sx={{
                            background:
                                'linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)',
                        }}
                    />
                    <CardContent sx={{ justifyContent: 'flex-end' }}>
                        <Typography level="h2" fontSize="lg" textColor="#fff" mb={1}>
                            {tittle}
                        </Typography>
                       
                    </CardContent>
                </Card>
                <Typography className="detail">
                        <p>{skills}</p>
                </Typography>
            </a>
            
            </div>
        </>
    )
}
