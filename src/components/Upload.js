import React,{ Component } from 'react';

class Header extends Component {

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];
        console.log(file);
        reader.onloadend = () => {

        }
    }

    render(){
        //const {cards} = this.props;
        return (
            <div className="upload">
                <label htmlFor="upload">
                    <i className="fa fa-cloud-upload" aria-hidden="true"></i>
                </label>
                <input type="file" id="upload" onChange={(e)=>this.handleImageChange(e)}/>
            </div>
        );

    }
}

export default Header;
