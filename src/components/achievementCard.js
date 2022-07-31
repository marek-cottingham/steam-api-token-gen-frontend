const AchievementCard = (props) => {
    var achievement = props.achievement;
    var name = achievement.name;
    var image_url = achievement.image_url;
    var size = "30px";

    return (
        <div 
            className="ui left aligned container"
            display='block'
            height='100%'
            style={{paddingBottom: '3px', float: 'none', overflow: 'auto'}}
        >
                <img 
                    className="ui middle left aligned image"
                    height={size} width={size} 
                    alt="" src={image_url}
                    style={{float: 'left', paddingRight: '3px'}}
                />
                <span display="inline-block">{name}</span>
                <br/>
        </div>
    );
}

export default AchievementCard;