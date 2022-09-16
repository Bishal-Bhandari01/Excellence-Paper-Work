

export default function Contactus() {
    return (
        <div id="contactus" className="container mt-5 mv-5">
            <div className="row">
                <div className="col">
                    <h2 className="text-center"><strong><u>Contact us</u></strong></h2>
                </div>
            </div>
            <div className="row mt-3 d-flex align-items-center">
                <div className="col-sm-6">
                    <h4>Thank you for Visiting.</h4>
                    <p>Excellence Paper Works</p>
                    <p>Karkando Chowk, NepalGunj</p>
                    <p>9864958063</p>
                </div>
                <div className="col-sm-6">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div className="mt-3 mb-3 text-center">
                        <button className="btn btn-primary" style={{width: '10rem'}} type="submit">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
