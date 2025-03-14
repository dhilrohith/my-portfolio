import PropTypes from "prop-types"

const SkillCard = (
    {
        imgSrc,
        label,
        desc,
        classes
    }
) => {
  return (
    <div className={'flex gap-3  inset-ring-2  inset-ring-zinc-50/20 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group' + classes}>
        <figure 
        className="bg-zinc-700/50 rounded-lg
         w-12 h-12 p-2 overflow-hidden
        group-hover:bg-zinc-900 transition-colors"
        >
            <img 
            src={imgSrc}
            width={32}
            height={32}
            alt={label}
            className="" 
            />
        </figure>

        <div>
            <h3>{label}</h3>

            <p 
            className="text-zinc-400 text-sm"
            >
                {desc}
            </p>
        </div>
    </div>
  )
}

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string.isRequired
}

export default SkillCard