import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const OrderFoodCart = ({ item }) => {
    const { image, price, recipe, name, _id } = item
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const [, refetch] = useCart()

    const handleAddToCart = food => {
        if (user && user.email) {
            // console.log(user)
            // 
            const cartItem = {
                menuId: _id,
                email: user.email,
                image,
                price,
                recipe
            }

            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if (res.data.insertedId) {

                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Add to Cart",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                    refetch();


                })


        } else {
            Swal.fire({
                title: "Please Login",
                text: "Add to Cart, Please Login",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div>
            <div className="card w-96 h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="" className="rounded-xl" />
                </figure>
                <p className="absolute right-0 bg-black text-white mr-4 mt-4 px-4">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCart(item)} className="btn btn-primary">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderFoodCart;