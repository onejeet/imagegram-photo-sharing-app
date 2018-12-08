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
            <label htmlFor="test">
                <div><i className="fa fa-cloud-upload" aria-hidden="true"></i> Upload</div>
                <input type="file" id="test" onChange={(e)=>this.handleImageChange(e)}/>
            </label>
        );

    }
}

export default Header;
