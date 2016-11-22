		var ProductCardComponent = React.createClass({
			render: function() {
				return (
	       		  <div>
			       	<div className="row">
			       	  <div className="col-sm-3 col-md-3">
			       	    <div className="thumbnail">
			       	      <img src="1.jpg" alt="Picture"/>
			       	      <div className="caption">
			       	        <h3>Pavadinimas</h3>
			       	        <p>Discription</p>
			       	        <p><a href="#" className="btn btn-primary" role="button">Details</a> </p>
			       	      </div>
			       	    </div>
			       	  </div>
			       	</div>
	       		  </div>
	       		  );
			}
		});
	 
		 ProductCardComponent.propTypes ={
		  };
  		
  		var ProductListComponent = React.createClass({
  				render: function() {
  					return (
  						<div>
  							<div className="row"> 
	  							
	  							<ProductCardComponent />
	  							<ProductCardComponent />
	  							<ProductCardComponent />
  							</div>
  						</div>
  				);
  			}
  		});
  		ProductListComponent.proptypes = {
  			title: PropTypes.string.isRequired,
  			description: PropTypes.string.isRequired,
  			price: PropTypes.number.isRequired,
		  }; 
		 
		  
  		ReactDOM.render(
  			  <ProductListComponent/>,
  			  document.getElementById('root')
  			);
