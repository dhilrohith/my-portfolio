import PropTypes from 'prop-types'

const ratings = new Array(5);
ratings.fill({
    icon: 'star',
    style: {
        fontVariationSettings: '"FILL"1'
    }
})

const CertificateCard = ({
    name,
    imgSrc,
}) => {
  return (
    <div 
    className="bg-zinc-800 p-5 rounded-xl min-w-[320px]
    flex flex-col lg:min-w-[420px] flex-wrap"
    >

        <div 
        className="flex items-center gap-1"
        >
            <p className="tracking-wider">{name}</p>

        </div>
        
        <div 
        className="flex items-center gap-2
        mt-6">
            <figure 
            className="img-box rounded-lg"
            >
                <img 
                src={imgSrc} 
                alt={name}
                width={44}
                height={44}
                loading='lazy'
                className="img-cover" 
                />
            </figure>
        </div>
    </div>
  )
}

CertificateCard.propTypes = {
    name: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
}

export default CertificateCard