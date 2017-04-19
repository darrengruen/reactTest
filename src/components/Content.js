import React from 'react';
import List from './List'
import { connect } from 'react-redux';

const content = (props) => <div className="container-fluid">
	<div className="row mt-2">
		{ props.lists.map(list => <List key={ list.id } { ...list } /> ) }
	</div>
</div>

const mapStateToProps = (state) => state.lists;

export default connect(mapStateToProps, null)(content);
