angular.module('clear', [ ])
	.controller("MainCtrl", ['$scope', '$rootScope', function ($scope, $rootScope) {
		$scope.projects = [
			{'name': 'Geocoded', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'NeXu', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'ProCode', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'Friendly', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'Halo', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'Nami', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'},
			{'name': 'Ruby Gem', 'description': 'Semiotics cliche Helvetica, hashtag crucifix tattooed keffiyeh banjo bespoke Pitchfork skateboard street art. Flexitarian mixtape occupy iPhone, tofu messenger bag four dollar toast keffiyeh drinking vinegar gluten-free gentrify lo-fi chia. Pickled whatever viral Bushwick yr retro. Ugh retro beard Brooklyn. Etsy pork belly bitters Portland skateboard. Viral cronut artisan brunch, Marfa hashtag McSweeneys tote bag forage deep v messenger bag gastropub paleo. Umami bicycle rights master cleanse PBR&B, fanny pack Godard PBR salvia mustache four dollar toast sriracha asymmetrical kogi twee Austin.'}			
		];

		$scope.submit = function(){
			var newProject = {'name': $scope.projectName, 'description': $scope.projectDescription};
			$scope.projects.push(newProject);
			$("#modal-close-btn").click();
		}
		
		$scope.projectDetailsFunction = function(project){
			$('#main-project-name').html('<h1 class="main-project-name">' + project.name + '</h1>');
			$('#main-project-description').html('<p class="main-project-description">' + project.description + '</h1>');
			projectDetails = project;
			$scope.projectDetails = project;
		}

		$scope.editProjectDetails = function(){
			$('#edit-name').attr({'value': projectDetails.name, 'placeholder': projectDetails.name});
			$('#edit-description').attr('placeholder', projectDetails.description);
		}

		$scope.saveChanges = function(){
			var index = $scope.projects.indexOf(projectDetails);
			$scope.projects[index] = {'name': $scope.nameInput, 'description': $scope.descriptionInput};
			$('#main-project-name').html('<h1 class="main-project-name">' + $scope.projects[index].name + '</h1>');
			$('#main-project-description').html('<p class="main-project-description">' + $scope.projects[index].description + '</p>');
			$scope.project.editName = false;
			$scope.project.h1 = false; 
			$scope.project.editDescription = false; 
			$scope.project.description = false;
		}

		$('#myTabs a').click(function (e) {
		  e.preventDefault()
		  $(this).tab('show')
		})

		$scope.addTaskDiv = function(){
			$('#todo').prepend("<div class=\"task\ col-sm-12\ ui-draggable\ draggable\"><textarea>Hello</textarea></div>");
			// $(".task").sortable({
			// 	cursor: "crosshair",
			// 	revert: "invalid",
			// 	snapmode: "inner",
			// 	snapTolerance: 30,
			// 	connectWith: '#in-progress'
			// });

			$("#in-progress").sortable({ 
			    connectWith: "#todo, #completed",
			})

			$("#todo").sortable({	 
		        connectWith: "#in-progress, #completed"     		
			})

			$('#completed').sortable({
				connectWith: '#in-progress, #todo'
			})
		}

	}])