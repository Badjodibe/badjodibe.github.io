import Webinaire from "./Webinaire";

export default function WebinaireList(){
    const webinaires = [
        {

        }
    ];
    
    return(
        <>
            <div>
                <div>
                    {webinaires.map((web, key)  => (
                    <Webinaire
                      key={key}
                      img={web.img}
                      title={web.title}
                      description={web.description}
                      date={web.date}
                      lieu={web.lieu}
                    />
                    ))
                    }
                </div>
            </div>
        </>
    );
}
