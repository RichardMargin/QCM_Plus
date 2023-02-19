package pmn.models;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Question implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column(nullable = false)
	private String content;
	@Column(nullable = false)
	private Boolean isActive;
	@ManyToOne(optional = false, fetch = FetchType.LAZY)
	@JsonIgnore
	private Quiz quiz;
	@OneToMany(fetch = FetchType.EAGER)
	@JoinColumn(nullable = false, name = "question_id")
	@Column(nullable = false)
	private List<Answer> answers;

}
