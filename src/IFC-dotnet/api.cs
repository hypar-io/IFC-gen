using System;

namespace IFC4
{
	public partial class Person
	{
	public static Person CreateArchitect(string firstName, string middleName, string lastName,)
	}

	public partial class Wall : BuildingElement
	{
		public static Wall Create(BuildingStorey storey, string description) 
		{	
			var architect = new ActorRole(RoleEnum.ARCHITECT, string.Empty, string.Empty);

			var personRoles = new PersonRoles(new ActorRole[]{architect},null,null,null);

			//#4 = IFCPERSON($, 'Bonsma', 'Peter', $, $, $, $, $);
			var person = new Person(personRoles,null,null,"keough","ian", 
				new string[]{}, new string[]{}, new string[]{});

			var organizationRoles = new OrganizationRoles(new ActorRole[]{architect},null,null,null);
			var postalLines = new PostalAddressAddressLines(new Labelwrapper[]{new Labelwrapper(null,null,null,null,"1234 Sesame St.")})
			var orgAddress = new PostalAddress(postalLines, AddressTypeEnum.OFFICE, "1234 Sesame St. Gotham, NY 10001", string.Empty);
			var organizationAddresses = new OrganizationAddresses(new Address[]{address},null,null,null);

			//#5 = IFCORGANIZATION($, 'RDF', 'RDF Ltd.', $, $);
			var organization = new Organization()
			var personAndOrg = new PersonAndOrganization(person, organization);

			var ownerHistory = new OwnerHistory(user, "test", null, "test", StateEnum.READWRITE, ChangeActionEnum.NOTDEFINED, 0, 0);

			var wall = new Wall();
			var agg = new RelAggregates(new RelAggregatesRelatedObjects())
			
			// Aggregation relationship
			wall.IsDecomposedBy = null;
			
			//RelDefinesByObject
			/*The objectified relationship IfcRelDefinesByObject defines the relationship between an object taking part in an object type decomposition and an object occurrences taking part in an occurrence decomposition of that type.
The IfcRelDefinesByObject is a 1-to-N relationship, as it allows for the assignment of one declaring object information to a single or to many reflected objects. Those objects then share the same object property sets and, for subtypes of IfcProduct, the eventually assigned representation maps.
Only objects that take part in a type decomposition and in an occurrence decomposition of the same type can be connected by the IfcRelDefinesByObject relationship. */
			wall.IsDeclaredBy = null;

			//ObjectIsDefinedBy
			wall.IsDefinedBy = null;

			//ObjectDefinitionIsNestedBy
			wall.IsNestedBy = null;

			//#66 = IFCWALLTYPE('0gdkW8K411DwAbwkQeyDKo', #2, 'Outer Wall Back', 'Description of Window Type', $, $, $, $, $, .STANDARD.);
			var wallType = new WallType();
			wallType.OwnerHistory = 
			var typeObject = new WallType()

			//#67 = IFCRELDEFINESBYTYPE('2lF9AHcET2svkKuyfUegwb', #2, $, $, (#60), #66);
			var typerel = new RelDefinesByType(typeObject);
			wall.IsTypedBy = null;

			return wall;
		}
	}
}