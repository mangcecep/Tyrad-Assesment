

import Rightbar from '../components/Rightbar'
import Sidebar from '../components/Sidebar'
import cardInfo from '../assets/card.png'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { useState } from 'react';
import CardChecklist from '../components/CardChecklist';
import Popup from 'reactjs-popup';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
import { useForm } from "react-hook-form"
import ChatCard from '../components/ChatCard';
import ReactSpeedometer from 'react-d3-speedometer';
import Headers from '../components/Headers';

const Home = () => {
    const [shoppingData, setShoppingData] = useState([])
    const [seltedItem, setSelectedItem] = useState([])
    const [chatHistory, setChatHistory] = useState([
        {
            message: 'are you ready?',
            sender: 'Jhon Doe',
            receipt: 'Ester Howard',
            receiptId: 1,
            senderId: 2,
            typeId: 2
        },
        {
            message: 'i have prepared everything',
            sender: 'Ester Howard',
            receipt: 'Jhon Doe',
            receiptId: 2,
            senderId: 1,
            typeId: 2
        },
    ])
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const {
        register: registerMessage,
        handleSubmit: handleSubmitMessage,
        formState: { errors: erroesMessage },
    } = useForm()

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'right'
            },
            title: {
                display: true,
                text: '',
            },
        },
    };
    const labels = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb'];
    const datas = {
        labels,
        datasets: [
            {
                label: '',
                data: [62, 30, 30, 22, 18],
                backgroundColor: 'blue',
            },
            {
                label: '',
                data: [55, 25, 22, 18, 10],
                backgroundColor: 'cyan',
            },
        ],
    };

    const addItem = (e) => {
        const isFound = shoppingData.some(element => {
            if (element.item === e.item) {
                return true;
            }

            return false;
        });
        if (isFound) {
            alert('this item has been added')
            return
        }
        setShoppingData([...shoppingData, { item: e.item }])
    }

    const checkListAction = (f) => {
        const isFound = seltedItem.some(element => {
            if (element.item === f) {
                return true;
            }

            return false;
        });
        isFound ? setSelectedItem(seltedItem.filter(res => res.item !== f)) : setSelectedItem([...seltedItem, { item: f }])
    }

    const removeItem = (item) => {
        setShoppingData(shoppingData.filter(res => res.item !== item))
        setSelectedItem(seltedItem.filter(res => res.item !== item))
    }

    const onSendMessage = (inpu) => {
        setChatHistory([...chatHistory, {
            message: inpu.message,
            sender: 'Ester Howard',
            receipt: 'Jhon Doe',
            receiptId: 2,
            senderId: 1,
            typeId: 2
        }])
    }

    return (
        <>
            <Headers />
            <Sidebar />
            <div className="page-wrapper">
                <div className="container-fluid">
                    <div className="row page-titles">
                        <div className="col-md-5 align-self-center">
                            <h2 className="text-themecolor">Hello, Jhon D</h2>
                            <h6 className="text-themecolor">View and control your finance here!</h6>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-7">
                            <div className="card" style={{ borderRadius: 10 }}>
                                <div className="row">
                                    <div className="col-md-3 col-12">
                                        <div className="p-4">
                                            <p className='cart-title'>Balance Statistics</p>
                                            <h4 className='card-subtitle'>$564</h4>
                                            <div className="row p-2">
                                                <i className="fa fa-money fa-3x"></i>
                                                <p className='ml-2'>Your Total <br />Balance</p>
                                                <hr />
                                            </div>
                                            <p className='text-muted h6'>Always see your <br />earning update</p>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-12">
                                        <Bar options={options} data={datas} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <img className='img-thumbnail' src={cardInfo} />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-5">
                            <div className="card p-2" style={{ borderRadius: 10 }}>
                                <p className="h5">List of Item to buy</p>
                                <div className="d-flex justify-content-start">
                                    <div>
                                        <p className='h3'>02:00</p>
                                        <p className='text-muted'>Sat, August 12</p>
                                    </div>
                                    <div className='mx-4'>
                                        <p className='h3'>{`>`}</p>
                                    </div>
                                    <div>
                                        <p className='h3'>05:00</p>
                                        <p className='text-muted'>Sat, September 12</p>
                                    </div>
                                </div>
                                <div className='d-flex justify-content-between'>
                                    <div className='title'>
                                        <span className='text-muted'>{seltedItem.length}/{shoppingData.length}</span>
                                        <span className='text-bold'> Shopping</span>
                                    </div>
                                    <div className='title'>
                                        <Popup
                                            trigger={
                                                <button className='btn btn-secondary'><i className='fa fa-plus'></i> Add an Item</button>
                                            }
                                            position={["top left", "top right", "bottom left", "bottom right"]}
                                            closeOnDocumentClick
                                        >
                                            <div className="popover-content">
                                                <div className="card p-3">
                                                    <form onSubmit={handleSubmit(addItem)}>
                                                        <input
                                                            placeholder='Input Item to Buy'
                                                            type='text'
                                                            className='form-control my-2'
                                                            {...register("item", { required: true })} />
                                                        {errors.item && <span className='text-danger'>This field is required <br /></span>}
                                                        <button className='btn btn-primary' type='submit'>Submit</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </Popup>
                                    </div>
                                </div>
                                <div className='row mt-2'>
                                    {
                                        shoppingData.length > 0 ? shoppingData.map(res => (<div className="col-5" key={res.item}>
                                            <CardChecklist title={res.item} action={() => removeItem(res.item)} checkListAction={(i) => checkListAction(i)} />
                                        </div>)) : ''
                                    }

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card p-2" style={{ borderRadius: 10 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Esther Howard</h5>
                                        <ChatCard chats={chatHistory} />
                                        <form onSubmit={handleSubmitMessage(onSendMessage)}>
                                            {erroesMessage.message && <span className='text-danger'>This field is required <br /></span>}

                                            <div className="input-group mt-3">
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    placeholder="Enter text here..."
                                                    aria-label="Text input with dropdown button"
                                                    {...registerMessage("message", { required: true })}
                                                />
                                                <div className="input-group-append">
                                                    <button
                                                        className='btn btn-outline-info'
                                                        type='submit'>
                                                        <i className="fa fa-paper-plane text-info" aria-hidden="true"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <div>
                                            <h5 className="card-title">Last Transaction</h5>
                                        </div>
                                        <div className="ml-auto">
                                            <select className="custom-select b-0">
                                                <option>January</option>
                                                <option value="1">February</option>
                                                <option value="2" >March</option>
                                                <option value="3">April</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover">
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td className="txt-oflo">Elite admin</td>
                                                <td className="txt-oflo">April 18, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td className="txt-oflo">Real Homes WP Theme</td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td className="txt-oflo">Ample Admin</td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td className="txt-oflo">Medical Pro WP Theme</td>
                                                <td className="txt-oflo">April 20, 2017</td>
                                                <td><span className="text-danger">-$24</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td className="txt-oflo">Hosting press html</td>
                                                <td className="txt-oflo">April 21, 2017</td>
                                                <td><span className="text-success">$24</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td className="txt-oflo">Digital Agency PSD</td>
                                                <td className="txt-oflo">April 23, 2017</td>
                                                <td><span className="text-danger">-$14</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">7</td>
                                                <td className="txt-oflo">Helping Hands WP Theme</td>
                                                <td className="txt-oflo">April 22, 2017</td>
                                                <td><span className="text-success">$64</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">8</td>
                                                <td className="txt-oflo">Helping Hands WP Theme</td>
                                                <td className="txt-oflo">April 22, 2017</td>
                                                <td><span className="text-success">$64</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">9</td>
                                                <td className="txt-oflo">Ample Admin</td>
                                                <td className="txt-oflo">April 19, 2017</td>
                                                <td><span className="text-info">$1250</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="card p-2" style={{ borderRadius: 10 }}>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Analitics</h5>
                                        <div className="table-responsive">
                                            <ReactSpeedometer
                                                width={500}
                                                needleHeightRatio={0.7}
                                                value={777}
                                                currentValueText=""
                                                customSegmentLabels={[
                                                    {
                                                        text: 'Very Bad',
                                                        position: 'INSIDE',
                                                        color: '#555',
                                                    },
                                                    {
                                                        text: 'Bad',
                                                        position: 'INSIDE',
                                                        color: '#555',
                                                    },
                                                    {
                                                        text: 'Ok',
                                                        position: 'INSIDE',
                                                        color: '#555',
                                                        fontSize: '19px',
                                                    },
                                                    {
                                                        text: 'Good',
                                                        position: 'INSIDE',
                                                        color: '#555',
                                                    },
                                                    {
                                                        text: 'Very Good',
                                                        position: 'INSIDE',
                                                        color: '#555',
                                                    },
                                                ]}
                                                ringWidth={47}
                                                needleTransitionDuration={3333}
                                                needleTransition="easeElastic"
                                                needleColor={'#90f2ff'}
                                                textColor={'#d8dee9'}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Rightbar />
        </>
    )
}

export default Home