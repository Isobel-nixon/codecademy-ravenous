

const apiKey = 'o7Tnq0_Q42Zt6g0Yxminpa9VvqmhjcG_W_9E52icKbsDYS-dlkZm-LOoM8W-Q6ObTqM_VQnYNAnF_t0J2_ugcpl8Xp0xh7qUnzMsfqYEte9ha79uiX-uIaOZY-m1XnYx';
const Yelp = {};

const search = (term, location, sortBy) => {
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {headers: {Authorization: `Bearer ${apiKey}`}})
        .then(response=> response.json())
        .then(jsonResponse=>{
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business=> {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });

};

export default Yelp;