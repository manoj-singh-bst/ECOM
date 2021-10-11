import React from 'react';
import Card from 'react-bootstrap/esm/Card';

export default function Welcome() {
    return (
        <div>
            <center>
                <Card className="cardContainer" style={{ marginTop: '20px', padding: '15px', width: '90%' }}  >
                    <Card.Body>

                        <img height="500px" width="60%" src="https://vignette.wikia.nocookie.net/clubpenguin/images/5/53/Welcome_Mat.PNG/revision/latest?cb=20140329134439" />
                    </Card.Body>
                </Card>
            </center>

        </div>


    );
}
