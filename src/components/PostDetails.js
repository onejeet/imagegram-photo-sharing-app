import React,{ Component } from 'react';


class PostDetail extends Component {

    postTimeFormatter = (timestamp) => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
                              "July", "August", "September", "October", "November", "December"
                            ];

        let date = Date.parse(timestamp);
        date = new Date(date);
        let formattedDate;
        switch (date.getMonth()) {
            case 0:
                formattedDate = 'Sunday ';
                break;
            case 1:
                formattedDate = 'Monday ';
                break;
            case 2:
                formattedDate = 'Tuesday ';
                break;
            case 3:
                formattedDate = 'Wednesday ';
                break;
            case 4:
                formattedDate = 'Thursday ';
                break;
            case 5:
                formattedDate = 'Friday ';
                break;
            case 6:
                formattedDate = 'Saturday ';
                break;

            default:

        }
        return monthNames[date.getMonth()]+" "+ date.getDate()+ ", "+date.getFullYear();
    }

    render(){
        const {post, postLiker, currentUser} = this.props;
        let timestamp = new Date(post.timestamp).toUTCString();
        return (
            <div className="card-details">
                <div className="heart">
                    <i className="fa fa-heart" style={(currentUser.liked.indexOf(post.id)>= 0) ? {'color':'red'}: {'color':'inherit'}}  onClick={(e) => postLiker(post.id)}></i>
                    <p>{post.likes}</p>
                </div>
                <div className="timestamp">
                    <i className="fa fa-clock-o" aria-hidden="true"></i>
                    <p>{this.postTimeFormatter(timestamp)}</p>
                </div>
            </div>
        );

    }
}

export default PostDetail;
