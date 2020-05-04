import React, { Component } from 'react';
import { Prompt } from 'react-router-dom'


class Contact extends Component {


    render() {
        return (
            <div>
                Đây là trang liên hệ
                <br />
                <button type="button" className="btn btn-info">Cho phép</button>
                <button type="button" className="btn btn-danger">Không cho phép</button><br />
                <Prompt
                    when={true}
                    message={location => (`Bạn chắc chắn muốn đi đến ${location.pathname} `)}
                />
            </div>
        );
    }
}

export default Contact;

