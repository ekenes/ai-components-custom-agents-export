const e=`## Membership Bind Parameters

The current link chart contains a subset of entities and relationships from the database. Their membership is available to Cypher queries as lists of string identifiers through these bind parameters:

- $entityIds
- $relationshipIds

If, and ONLY if, the user is asking for data to be limited by the records already on 'the current link chart', 'my link chart', or similar, the generated Cypher should filter using these parameters.

### START EXAMPLES

User request: 'Add all records that are connected to people on this link chart to the link chart'
Context: 'Person' entity in data model.
Expected Result: MATCH (n:Person)-[r]->(m) WHERE id(n) IN $entityIds return r, m

User request: 'Add all the suppliers to the link chart'
Context: 'Supplier' entity in the data model.
Expected Result: MATCH (s:Supplier) RETURN s

### END EXAMPLES
`;export{e as default};
//# sourceMappingURL=arcgis_knowledge_current_lc_context-DcCsoY3E.js.map
